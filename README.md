# PaperDesign
A CSS framework with a few JS components.

This CSS framework contains some JS components which will look good but not work properly
if you do not embed the "pd.js"-file.
All JavaScript-Components will initialize themselves automatically.

## Components

### Table
```html
    <table class="pd-table">
     <thead>
      <tr>
       <th>#</th>
       <th>Name</th>
       <th>Price</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>1</td>
       <td>Caviar</td>
       <td>50$</td>
      </tr>
      <tr>
       <td>2</td>
       <td>Rib-Eye</td>
       <td>20$</td>
      </tr>
     </tbody>
    </table>
```

## Tabbar (JS component)
```html
<div class="pd-tabbar">
 <div class="pd-tabbar-tab">tab 1</div>
 <div class="pd-tabbar-tab">tab 2</div>
 <div class="pd-tabbar-tab">tab 3</div>
 <div class="pd-tabbar-tab">tab 4</div>
 <div class="pd-tabbar-tab">tab 5</div>
</div>
```
You can access the Tabbar component via JavaScript.
```javascript
let index = 3;
let firstTabbarOnPage = PaperDesignTabbars[0];
/*if an index is passed into the method it will be inserted at the position of index
if not it will be inserted at the end*/
firstTabbarOnPage.push('new tab', index);
//delete tab at given index
firstTabbarOnPage.pop(index);
```
