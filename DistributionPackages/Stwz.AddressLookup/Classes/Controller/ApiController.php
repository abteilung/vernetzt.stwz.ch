<?php
declare(strict_types=1);

namespace Stwz\AddressLookup\Controller;

/*
 * This file is part of the Stwz.AddressLookup package.
 *
 * (c) Contributors of Abteilung für Gestaltung GmbH - www.abteilung.ch
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */


use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;

/**
 * The User Controller
 */
class ApiController extends ActionController
{

    /**
     * @var string
     */
    protected $viewFormatToObjectNameMap = [
        'json' => \Neos\Flow\Mvc\View\JsonView::class
    ];

     /**
     * A list of IANA media types which are supported by this controller
     *
     * @var array
     */
    protected $supportedMediaTypes = ['application/json'];

    /**
     * @Flow\InjectConfiguration(path="Api", package="Stwz.AddressLookup")
     * @var array
     */
    protected $configuration;

    /**
     * @Flow\Inject
     * @var Neos\Flow\Mvc\Routing\UriBuilder
     */
    protected $uriBuilder;

    /**
     * lookup action
     * @param string $houseNumber
     * @param string $houseNumberSuffix
     * @param string $streetname
     * @param string $zip
     * @param string $city
     * @param string $country

     */
    public function fetchAction($houseNumber = '', $houseNumberSuffix = '', $streetname = '', $zip = '', $city = '', $country = '')
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $this->configuration['URL'] . '?streetname='.urlencode($streetname).'&city='.urlencode($city).'&country='.urlencode($country).'&zip_code='.urlencode($zip).'&house_number='.urlencode($houseNumber).'&house_number_suffix='.urlencode($houseNumberSuffix),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => array(
                'Authorization: ' . $this->configuration['Auth'],
                'X-Api-Key: ' . $this->configuration['Key'],
                'Content-Type: application/json'
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);

        if(!$response && $response !== '') {
            // throw new CurlException(curl_error($ch), curl_errno($ch));
        }

        return $response;
        
        // return json_encode(array(
        //     'code' => curl_getinfo($curl, CURLINFO_HTTP_CODE),
        //     'response' => $response
        // ));

    }

}