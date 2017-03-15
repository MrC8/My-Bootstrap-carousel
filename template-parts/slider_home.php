<?php if( have_rows('slider_home') ): $i = -1; ?>
  
  <!-- Indicators -->
  <ol class="carousel-indicators">
  <?php while( have_rows('slider_home') ): $i++; the_row() ; ?>
    <li data-target="#myCarousel" data-slide-to="<?php echo $i; ?>" class="<?php if($i==0){ echo 'active';} ?>"></li>
  <?php endwhile; ?>
  </ol>
  
	<div class="carousel-inner" role="listbox">

	<?php while( have_rows('slider_home') ): the_row(); 

		// vars
		$image = get_sub_field('image');
		$titre = get_sub_field('titre');
		$contenu = get_sub_field('contenu');
		$bouton = get_sub_field('bouton');
		$link = get_sub_field('lien');
		?>

		<div class="item">
			<?php if( $link ): ?>
				<a href="<?php echo $link; ?>">
			<?php endif; ?>

				<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>" />
                <div class="carousel-caption">
                	<div class="carousel-wrap">
                    <?php if( $titre ): ?>
                    	<h2 class="title"><?php echo $titre; ?></h2>
                    <?php endif; ?>
                    <?php if( $contenu ): ?>
	                    <div class="txt"><?php echo $contenu; ?></div>
    				<?php endif; ?>
                    <?php if( $bouton ): ?>
                   		<span class="btn btn-default"><?php echo $bouton; ?></span>
                	<?php endif; ?>
                    </div>
                </div>
			<?php if( $link ): ?>
				</a>
			<?php endif; ?>

		    <?php echo $content; ?>

		</div>

	<?php endwhile; ?>

	</div>

<?php endif; ?>
  <!-- Left and right controls -->
  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Précédent</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Suivant</span>
  </a>