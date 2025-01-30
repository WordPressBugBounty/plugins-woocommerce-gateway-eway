<?php
/**
 * @license MIT
 *
 * Modified by woocommerce on 30-January-2025 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

namespace Automattic\WooCommerce\Eway\Vendors\Eway\Rapid\Model\Support;

use Automattic\WooCommerce\Eway\Vendors\Eway\Rapid\Validator\EnumValidator;

/**
 * Class CanValidateEnumTrait.
 */
trait CanValidateEnumTrait
{
    /**
     * @param string $class
     * @param string $field
     * @param mixed  $value
     */
    protected function validateEnum($class, $field, $value)
    {
        $this->attributes[$field] = EnumValidator::validate($class, $field, $value);
    }
}
