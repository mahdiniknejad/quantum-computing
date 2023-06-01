import random
from django.conf import settings

def check_some_codes(code):
    pic = str(settings.BASE_DIR) + '/pics/' + str(random.randint(100000, 999999)) + '.png'
    precode = f"import matplotlib.pyplot as plt\noriginal_show = plt.show\ndef save_plot(*args, **kwargs):\n    fig = plt.gcf()\n    fig.savefig('{pic}')\nplt.show = save_plot\n\n"

    return precode + code, pic

