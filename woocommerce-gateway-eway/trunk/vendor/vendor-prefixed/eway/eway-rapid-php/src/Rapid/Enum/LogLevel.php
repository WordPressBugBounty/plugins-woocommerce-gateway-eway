<?php
/**
 * @license MIT
 *
 * Modified by woocommerce on 30-January-2025 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

namespace Automattic\WooCommerce\Eway\Vendors\Eway\Rapid\Enum;

/**
 * Class LogLevel.
 *
 * PSR-3 log levels
 */
abstract class LogLevel extends AbstractEnum
{
    const EMERGENCY = 'emergency';
    const ALERT     = 'alert';
    const CRITICAL  = 'critical';
    const ERROR     = 'error';
    const WARNING   = 'warning';
    const NOTICE    = 'notice';
    const INFO      = 'info';
    const DEBUG     = 'debug';
}
