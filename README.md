# While changing name of TourList as template in gatsby-node:-
* TourListIndx: based on ToursIndx. g-node changed to add slug to page context. Gives error
* Comment out page create of TourListIndx. Proven page context gets passed to page in GraphQL as $slug, by changing all to $slugg.

- next: add slug, and other page context for tour listings

# While using TourList as template in gatsby-node:-
TourListLASTGitpod-7feb.js: last one seemingly working in GP. Based on orig TourList. All cards empty
TourListLASTNW: failed so then adjusted orig TourList
TourList: based on orig TourList. looks good but all cards empty
TourListLASTNW-ToursIndx added: as TourList but with ToursIndx. Failed re tag.

## 7Feb
ListPageHeader:-
<div className="container">
        <h2>{placeTitle}</h2>
        <DropMenuButton title="Filters" id="dropButton"/>
      </div>