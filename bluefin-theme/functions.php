<?php
function bluefin_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'bluefin')
    ));
}
add_action('after_setup_theme', 'bluefin_theme_setup');
?>