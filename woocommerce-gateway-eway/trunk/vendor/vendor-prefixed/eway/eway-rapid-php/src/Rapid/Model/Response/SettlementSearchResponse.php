<?php
/**
 * @license MIT
 *
 * Modified by woocommerce on 30-January-2025 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

namespace Automattic\WooCommerce\Eway\Vendors\Eway\Rapid\Model\Response;

/**
 * Class SettlementSearchResponse.
 *
 * @property array  SettlementSummaries
 * @property array  SettlementTransactions
 */
class SettlementSearchResponse extends AbstractResponse
{
    protected $fillable = [
        'SettlementSummaries',
        'SettlementTransactions',
        'Errors'
    ];
}
