<?php return array(
    'root' => array(
        'name' => 'woocommerce/woocommerce-gateway-eway',
        'pretty_version' => '1.0.0+no-version-set',
        'version' => '1.0.0.0',
        'reference' => NULL,
        'type' => 'wordpress-plugin',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'dev' => false,
    ),
    'versions' => array(
        'eway/eway-rapid-php' => array(
            'pretty_version' => '2.0.0',
            'version' => '2.0.0.0',
            'reference' => 'fee6909e303111761c0899a53bf432dba11fa1f6',
            'type' => 'library',
            'install_path' => __DIR__ . '/../eway/eway-rapid-php',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'woocommerce/woocommerce-gateway-eway' => array(
            'pretty_version' => '1.0.0+no-version-set',
            'version' => '1.0.0.0',
            'reference' => NULL,
            'type' => 'wordpress-plugin',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
    ),
);
