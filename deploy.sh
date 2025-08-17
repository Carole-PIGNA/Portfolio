#!/bin/bash

if [[ $# -lt 2 ]]; then
  echo "----- Parameter missing ------"
  echo "----- usage: $0 <service> <project-id> ------"
  exit 1
fi

SERVICE=$1
PROJECT=$2

echo "----- Process is starting -----"

echo "-- Cleaning previous build and caches --"
rm -rf dist/ node_modules/ .angular/cache/*

echo "-- Installing dependencies --"
npm install &&
npm ci

echo "-- Setting GCP project --"
gcloud config set project "$PROJECT"

# Vérifie si le service existe
if gcloud app services list | grep "$SERVICE" > /dev/null; then
  echo "---- Service $SERVICE trouvé, suppression en cours... ----"
  echo "---- Finalement on ne supprime pas car il y a du mapping ----"
  #gcloud app services delete "$SERVICE" --quiet
else
  echo "---- Service $SERVICE non trouvé ----"
fi

echo "-- Build Angular project --"
ng build --configuration=production

# Vérifie si build réussi
if [[ ! -f dist/mon-portfolio/browser/index.html ]]; then
  echo "❌ Build failed or index.html not found."
  exit 1
fi

echo "-- Preparing app.yaml for deploy --"
cp app.yaml dist/mon-portfolio/browser/

echo "-- Deploying app to App Engine --"
cd dist/mon-portfolio/browser
gcloud app deploy --no-cache --quiet

cd ../../../
echo "========== deploy routing =========="
if [[ -f dispatch.yaml ]]; then
  echo "-- Deploying dispatch.yaml --"
  echo "-- Attente de 10 secondes pour laisser le service s'activer --"
  sleep 10
  gcloud app deploy dispatch.yaml --quiet
else
 echo "chemin actuel: ---------- $pwd ----------"
  echo "❌ dispatch.yaml not found."
fi

echo "✅ Déploiement terminé !"

echo "-- Nettoyage post-déploiement --"

sleep 10

echo "---------- Domain mapping----------"
./domain-mapping.sh
rm -rf dist/ node_modules/ .angular/cache/*
npm cache clean --force
