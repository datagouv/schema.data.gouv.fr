from mailjet_rest import Client
import os


class EmailNotification(object):
    def __init__(self, email_to, exceptions):
        super(EmailNotification, self).__init__()
        self.email_to = email_to
        self.exceptions = exceptions

    def send(self):
        errors = "\n".join(["- " + repr(e) for e in self.exceptions])
        text = (
            "Bonjour !\n\nDes erreurs sont survenues lors de la validation de vos schémas.\n\n%s\n\nMerci de corriger ces erreurs."
            % errors
        )
        data = {
            "Messages": [
                {
                    "From": {
                        "Email": "validation@data.gouv.fr",
                        "Name": "Validation data.gouv.fr",
                    },
                    "To": [{"Email": self.email_to}],
                    "Subject": "Erreur lors de la validation de vos schémas",
                    "TextPart": text,
                }
            ]
        }
        self.client().send.create(data=data)

    def client(self):
        api_key = os.environ["MAILJET_APIKEY_PUBLIC"]
        api_secret = os.environ["MAILJET_APIKEY_PRIVATE"]
        return Client(auth=(api_key, api_secret), version="v3.1")
