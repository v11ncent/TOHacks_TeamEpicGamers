from trycourier import Courier

client = Courier(auth_token="******************")

resp = client.send(
  event="personalized-welcome-email",
  recipient="Github_56174164",
  profile={
  },
  data={
    firstname: "Evelyn",
  },
)