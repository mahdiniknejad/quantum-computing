import random
from django.conf import settings


def check_some_codes(code: str) -> str:
    pic = (
        str(settings.BASE_DIR)
        + "/static_cdn/media_root/"
        + str(random.randint(100000, 999999))
        + ".png"
    )
    precode = f"import matplotlib.pyplot as plt\noriginal_show = plt.show\ndef save_plot(*args, **kwargs):\n    fig = plt.gcf()\n    fig.savefig('{pic}')\nplt.show = save_plot\n\n"

    return precode + code, pic


def check_security(code: str) -> bool:
    bad_codes = (
        "import os",
        "from os",
        "import sys",
        "from sys",
        "import path",
        "from path",
        "import time",
        "import datetime",
        "from time",
        "from datetime",
    )
    if any(bad_code in code for bad_code in bad_codes):
        return False

    return True


def handle_the_quotes(code: str) -> str:
    return code.replace('"', "'")
