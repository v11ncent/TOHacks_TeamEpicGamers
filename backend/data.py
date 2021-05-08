import logging
import os
import cloudstorage as gcs
import webapp2

from google.appengine.api import app_identity



bucket_name = os.environ.get('vabe-citibike-bucket',
                               app_identity.get_default_gcs_bucket_name())

self.response.headers['Content-Type'] = 'text/plain'
self.response.write('Demo GCS Application running from Version: '
                      + os.environ['CURRENT_VERSION_ID'] + '\n')
self.response.write('Using bucket name: ' + bucket_name + '\n\n')

#pip install --upgrade google-cloud-storage
