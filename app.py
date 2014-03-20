# coding: utf8

import os

from bottle import route, run, static_file, view
import requests


ROOT_DIR = os.path.dirname(os.path.abspath(__file__))


def root(*paths):
    """ Returns the paths relative to this files parent directory. """

    return os.path.join(ROOT_DIR, *paths)


@route('/static/<filename>')
def server_static(filename):
    return static_file(filename, root=root('static'))


@route('/')
@view('index')
def index():
    """ The root page. """

    response = requests.get('https://blockchain.info/ticker', verify=False)
    btc_price = 590.0

    if response.status_code == 200:
        btc_price = response.json().get('USD', {}).get('15m', 0.0)

    btc_quantity = 0.001694916
    btc_value = btc_quantity * btc_price

    return {
        'btc_price': btc_price,
        'btc_quantity': btc_quantity,
        'btc_value': btc_value,
    }

if __name__ == '__main__':
    run(host='0.0.0.0', port=os.environ.get('PORT', 9000))
