resource "google_pubsub_topic" "pub_sub" {
    name = "pub_sub"

    labels = {
        foo = "bar"
    }

    message_retention_duration = "86600s"
  
}