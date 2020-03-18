# PaperDesign
A CSS framework with a few JS components.

This CSS framework contains some JS components which will look good but not work properly
if you do not embed the "pd.js"-file.
All JavaScript-Components will initialize themselves automatically.

## Components

### Table
```html
    <table class="pd table">
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

### Tabbar (JS component)
```html
<div class="pd tabbar">
 <div class="tab">tab 1</div>
 <div class="tab">tab 2</div>
 <div class="tab">tab 3</div>
 <div class="tab">tab 4</div>
 <div class="tab">tab 5</div>
</div>
```
You can access the Tabbar component via JavaScript.
```javascript
let index = 3;
let firstTabbarOnPage = PaperDesignTabbars[0];
/*if an index is passed into the method the new tab will be inserted at the position of index
if not it will be inserted at the end*/
firstTabbarOnPage.push('new tab', index);
//delete tab at given index
firstTabbarOnPage.pop(index);
```

### Tabslider (JS component)
```html
<div class="pd tabslider">
 <div class="bar">
  <div class="tab active">
   Tab1
  </div>
 <div class="tab">
  Tab2
 </div>
</div>
<div class="container">
 <div class="item">
  Slide1
 </div>
 <div class="item">
  Slide2
 </div>
 </div>
</div>
```
This component is similar to the Tabbar component. With the Tabslider component you can control the slides in the slider-container.


### Sidemenu (JS component)
```html
<div class="pd sidemenu">
 <div class="header">
  <h2>Header 1</h2>
 </div>
 <div class="item">
  <p>Item 1</p>
 </div>
 <div class="item">
  <p>Item 2</p>
 </div>
 <div class="item">
  <p>Item 3</p>
 </div>
 <div class="item">
  <p>Item 4</p>
 </div>
</div>
```
You can access the Sidemenu component via JavaScript. Note you cannot have more than one more sidemenu per side.

```javascript
//opens menu
PaperDesignSidemenu.open();

//closes menu
PaperDesignSidemenu.close();

//toggles menu way better than calling two methods, right?
PaperDesignSidemenu.toggle();
```

### Lightbox (JS component)
```html
<div class="pd-lightbox">
 <div class="image">
  <img src="./images/river.jpg" alt="example image">
 </div>
</div>
```
With the PaperDesignLightbox you can you can enlarge images and put them onto a dark grey background to get the best out of your images.
By clicking on the image the lightbox opens click again and it will close.

## Helper Classes

### no-scrollbar
Add this class to the classList of an element to hide the scrollbar of it and maintain the scroll-function.

### hide-on-mobile
Add this class to the classList of an element to hide it on mobile screens (max-width: 576px).

### hide-on-desktop
Add this class to the classList of an element to hide it on screens above 992px width.
