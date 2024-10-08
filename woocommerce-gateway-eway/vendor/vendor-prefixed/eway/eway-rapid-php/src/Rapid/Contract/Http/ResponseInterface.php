<?php
/**
 * @license MIT
 *
 * Modified by woocommerce on 16-October-2023 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

namespace Automattic\WooCommerce\Eway\Vendors\Eway\Rapid\Contract\Http;

/**
 * Interface ResponseInterface.
 */
interface ResponseInterface
{
    /**
     * Gets the body of the message.
     *
     * @return string
     */
    public function getBody();

    /**
     * Gets the response status code.
     *
     * The status code is a 3-digit integer result code of the server's attempt
     * to understand and satisfy the request.
     *
     * @return int Status code.
     */
    public function getStatusCode();

    /**
     * Gets the error message if one occurred
     *
     * @return string
     */
    public function getError();
}
