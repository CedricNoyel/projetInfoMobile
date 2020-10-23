# Projet développement mobile

On utilise l'API mise à disposition par la DevFest
On souhaite avoir une application mobile permetttant de visualiser les différentes sessions présentées lors de l'évènement et connaitre les présentateurs.

Une fonctionnalité de prise de notes et d'ajout de photos est aussi présente.

Ce projet est réalisé dans le cadre d'un projet scolaire dispensé par Rossi ODDET, intervenant à IMT Atlantique.

# TODOS

Avancement: ![70%](https://progress-bar.dev/70)

- [x] Initialisation du projet
- [x] Installation Capacitor
- [x] Liste des sessions
- [x] Détail d'une session
- [x] Liste des speakers
- [x] Détail d'un speaker
- [x] Page d'accueil
- [x] Page téléphone
- [x] PWA
- [ ] Mise en cache des données hors ligne
- [ ] Page agenda
- [ ] Page mes notes
- [ ] Ajouter/editer une note
- [ ] Prendre une photo depuis mes notes
- [ ] Ajouter un speaker aux contacts
- [ ] Page agenda

# Commandes

## Installer les dépendances

Se positionner à la racine du projet

```
npm install
```

## Lancer le serveur web en http

```
ionic serve
```

## Lancer le serveur web en https

On utilise le module npm `https-localhost`

```
npm run build
npm run serve
```

## Lancer avec l'émulateur android studio

```
npx cap sync
npx cap run android
```

# Membres du groupe

- Cédric NOYEL
- Jordan GENEVE
- Raphael HASCOUET
