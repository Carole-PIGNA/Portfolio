#!/bin/bash

echo "========== Remapping domaines personnalisés =========="

# Liste des domaines à remapper
DOMAINS=("carolepigna.fr" "www.carolepigna.fr")

for DOMAIN in "${DOMAINS[@]}"; do
  echo "-- Traitement du domaine: $DOMAIN --"

  # Supprimer le mapping existant s'il existe
  if gcloud app domain-mappings describe "$DOMAIN" &> /dev/null; then
    echo "   🔄 Suppression du mapping existant pour $DOMAIN"
    gcloud app domain-mappings delete "$DOMAIN" --quiet
  else
    echo "   ✅ Aucun mapping existant pour $DOMAIN"
  fi

  # Créer le nouveau mapping vers le service portfolioapp
  echo "   ➕ Création du mapping vers le service portfolioapp"
  gcloud app domain-mappings create "$DOMAIN" --quiet
done

echo "✅ Remapping terminé. Attente de 10 secondes pour stabilisation..."
sleep 10

# Vérification du routage
for DOMAIN in "${DOMAINS[@]}"; do
  echo "🔍 Vérification du routage pour https://$DOMAIN"
  curl -s -I "https://$DOMAIN" | grep "HTTP\|Location"
done
