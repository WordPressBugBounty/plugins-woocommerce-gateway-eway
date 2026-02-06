(($) => {
  const $method = $('#woocommerce_eway_connection_method');
  const $apiKey = $('#woocommerce_eway_public_api_key');
  const $button = $('button[type="submit"]');

  const toggleBtnProps = () =>{
    if ($method.val() === 'card_credit' && $apiKey.val().trim() === '') {
      $button.attr('disabled', true);
      $button.props('disabled', true);
    } else {
      $button.removeAttr('disabled');
      $button.props('disabled', false);
    }
  }

  $method.on('change', toggleBtnProps);
  $apiKey.on('input change', toggleBtnProps);
})(jQuery);
