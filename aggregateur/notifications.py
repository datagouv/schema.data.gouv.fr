from mailjet_rest import Client
import os


class EmailNotification(object):
    VALIDATION_DOC_URL = "https://schema.data.gouv.fr/documentation/validation-schemas"

    def __init__(self, email_to, exceptions):
        super(EmailNotification, self).__init__()
        self.email_to = email_to
        self.exceptions = exceptions

    def send(self):
        errors = "\n".join(["- " + repr(e) for e in self.exceptions])
        text = "\n\n".join(
            [
                "Bonjour,",
                "Cet e-mail est envoyé suite à votre soumission de schéma sur schema.data.gouv.fr.",
                "Des erreurs sont survenues lors de la validation de vos schémas :",
                errors,
                "Merci de corriger ces erreurs. Vous pouvez soit créer un nouveau tag soit modifier le tag existant en intégrant vos corrections. Une fois ces erreurs corrigées, vos modifications seront intégrées sans action supplémentaire de votre part.",
                f"Pour vous aider, vous pouvez consulter la documentation détaillant les validations effectuées sur les schémas : {self.VALIDATION_DOC_URL}.",
                "L'équipe de data.gouv.fr",
            ]
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

        if self.should_send_email():
            self.client().send.create(data=data)

    def client(self):
        api_key = os.environ["MAILJET_APIKEY_PUBLIC"]
        api_secret = os.environ["MAILJET_APIKEY_PRIVATE"]
        return Client(auth=(api_key, api_secret), version="v3.1")

    def should_send_email(self):
        return os.environ.get("CIRCLE_BRANCH", "nope") == "master"
