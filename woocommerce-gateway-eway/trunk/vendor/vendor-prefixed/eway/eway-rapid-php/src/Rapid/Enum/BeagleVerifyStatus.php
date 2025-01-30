<?php
/**
 * @license MIT
 *
 * Modified by woocommerce on 30-January-2025 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

namespace Automattic\WooCommerce\Eway\Vendors\Eway\Rapid\Enum;

/**
 * Possible values returned from the responsive shared page beagle verify feature.
 */
abstract class BeagleVerifyStatus extends AbstractEnum
{
    const NOT_VERIFIED = 0;
    const ATTEMPTED = 1;
    const VERIFIED = 2;
    const FAILED = 3;
}
