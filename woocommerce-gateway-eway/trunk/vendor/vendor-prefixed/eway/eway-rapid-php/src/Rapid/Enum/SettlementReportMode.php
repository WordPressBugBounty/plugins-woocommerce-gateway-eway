<?php
/**
 * @license MIT
 *
 * Modified by woocommerce on 30-January-2025 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

namespace Automattic\WooCommerce\Eway\Vendors\Eway\Rapid\Enum;

/**
 * This defines the search modes available for settlement search.
 */
abstract class SettlementReportMode extends AbstractEnum
{
    const BOTH = 'Both';
    const SUMMARYONLY = 'SummaryOnly';
    const TRANSACTIONONLY = 'TransactionOnly';
}
