<?php
/**
 * @license MIT
 *
 * Modified by woocommerce on 30-January-2025 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

namespace Automattic\WooCommerce\Eway\Vendors\Eway\Rapid\Model\Support;

/**
 * Trait HasShippingAddressTrait.
 */
trait HasShippingAddressTrait
{
    /**
     * @param mixed $shippingDetails
     *
     * @return $this
     */
    public function setShippingAddressAttribute($shippingDetails)
    {
        $this->validateInstance('Automattic\WooCommerce\Eway\Vendors\Eway\Rapid\Model\ShippingAddress', 'ShippingAddress', $shippingDetails);

        return $this;
    }
}
