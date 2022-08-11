What is expected ?

Patient
- Enregistrement de "patient" (notion de "récurrent" ?)
- Recherche d'un patient
- Fiche technique par patient (NOM, PRENOM, ADRESSE, MAIL, liste des RDV passés et pris, accès aux factures)

Rendez-vous
- Notion de "rendez-vous"
- Annulation ?

Facture
- Génération des factures (format pdf)
- Facture dépendent des soins (1 facture par rendez-vous)


APPLICATION
- Utilisateur unique (auth)
- Gestion des patients :
    - Patient : Nom / Prénom / adresse / mail / RDV (le champs mail non requis)
    - Ajouter un nouveau patient
    - Consulter la liste des patient existant (avec une recherche de patient)
    - Accéder à la fiche d’un patient 
- RDV :
    - date du rdv / soins (raison du rdv) / facture pdf
    - Un rdv est lié à un unique patient
    - Chaque patient peut avoir plusieurs rdv a plusieurs date différentes  

- Fiche patient: 
    - Accès aux informations spécifique du patient
    - Editer les informations spécifique du patient 
    - Accès à la liste de tous les rdv et aux factures associés au patient
    - Possibilité de recherche ou trier les factures liées au patient

- Sécurité: 

- Facture: 
    - la facture doit avoir un numéro de facturation unique
    - la facture doit contenir la raison du rdv avec le prix associé
    - le nom / prénom du patient la date d'émission 


- Plus non obligatoire: 
    - Possibilité d’envoyer la facture d’un rdv par mail aux patients dont le mail est renseigné. 
    - voir pour intégrer le calendrier ubicentrex, via iframe ou autre
    - Toutes fonctionnalités pensées par l’équipe qui peuvent faire la différence. (Ajout de la pointure du patient après création de sa fiche, pouvant être mis à jour (pour les enfants), système de notifications pour alerter l’administrateur du bon fonctionnement de ses actions sur la plateforme, possibilité de rendre dynamique les tarifs des soins, etc…)
