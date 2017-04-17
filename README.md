# js-react-exercices
exercices react (decomposition, fetch, style, pass-through ...)

# Références

* https://github.com/vasanthk/react-bits

# Exercices

## 01 - app

Partir du dernier exercicice en react : js-react-coloring-list

Si vous n'avez pas fait l'exercice, vous pouvez vous appuyer sur le repo d'un collégue ou faire un fork de [js-react-coloring-list](https://github.com/simplonco/js-react-coloring-list)

## 02 - décomposition 

### 1. Décomposer l'application en composants. 

On passe en props les informations liées à l'application. Les avantages sont :

  * d'avoir un code de meilleur qualité : lisibilité, simplicité, testable, débuggable
  * d'isoler les composants afin qu'il soit réutilisable dans différent context
  * de partager le travail sans avoir à merger à chaque commit
  
### 2. Transformer les composants qui ne gére pas de state en stateless components (dumb components ou presentational components)

### 3. Essayer de créer des composants réutilisables :

  * Passer les informations relative à la spécificité de l'application en props 
  * Utiliser les patterns vus ci-dessus (react-bits) selon vos besoins
  * Créer des fichiers css par composants (ou par groupe de composants)

## 03 - Styled-components

Styled-components est une librairie qui exploite le pattern [style component](https://github.com/vasanthk/react-bits/blob/master/patterns/11.style-component.md) de façon élégante et pratique.

Utiliser [styled-components](https://github.com/styled-components/styled-components) pour le style de vos composants

## 04 - create a random button

Ajoutons un bouton random qui génére une couleur héxadecimal. 

1. créer la function getRandomColor (créer une couleur en random)
2. lier le bouton à une function addRandomColor (ajoute une couleur à la liste)

## 05 - Fetch et promise

Améliorons la function addRandomColor en utilisant [thecolorapi.com](http://www.thecolorapi.com/) afin de donner un nom à la couleur générée.

Je vous propose d'utiliser [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) afin d'interroger [thecolorapi.com](http://www.thecolorapi.com/).

Le but est de récupérer le nom de la couleur pour ensuite l'ajouter à la liste.


 