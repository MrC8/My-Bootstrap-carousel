Touch screen Bootstrap carousel for wordpress with animated title, content, and button
=================================

### YOU NEED ACF PRO !

* Create a repeater named "slider_home" with ACF
* Add this repeater to your home page or any other page
* Create 5 sub elements :
  image : Image elemnt
  titre : Text element
  contenu : Text area element
  bouton : Text element
  lien : Link to a page or article
* Add jquery.mobile.custom.min.js to your theme (call him only on the slider page)
* Add custom.js to your theme
* I use scss. So change your boostrap file _carousel.scss by this one
* Add slider_home.php to the template-parts folder of the theme.
* Call this file in your theme like this :
  ```shell
	  <?php if ( is_page('page_ID')) : ?>
    	<div id="myCarousel" class="carousel slide" data-ride="carousel">
			  <?php include_once( __DIR__ . '/template-parts/slider_home.php');?>
      </div>
    <?php endif; ?>
	```
  ### ET VOILA !
