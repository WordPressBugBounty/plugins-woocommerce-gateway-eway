<?php
/**
 * @license MIT
 *
 * Modified by woocommerce on 30-January-2025 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

namespace Automattic\WooCommerce\Eway\Vendors\Eway\Rapid\Model\Response;

/**
 * @property string Errors
 * @property string Default3dsUrl
 * @property string AccessCode
 */
class Creation3dsEnrolmentResponse extends AbstractResponse
{
    protected $fillable = [
        'Errors',
        'Default3dsUrl',
        'AccessCode',
    ];
}
