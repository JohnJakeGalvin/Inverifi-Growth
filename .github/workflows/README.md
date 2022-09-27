## App template

## Secerts that must be set after cloning

# Must set
AWS_ACCESS_KEY_ID          = access keys

AWS_SECRET_ACCESS_KEY      = access keys

APP_NAME                   = machine name of the app created eg message_wall_app or page_app

GH_ACCESS_TOKEN            = access token for github

#Staging
STAGING_AWS_REGION         = AWS region staging site is hosted in eg eu-west-1

STAGING_DISTRIBUTION       = id of cloudfront distribution for staging app site

#Live
AWS_PRODUCTION_BUCKET_NAME = s3 bucket name of live app site

LIVE_AWS_REGION            = AWS region live site is hosted in eg eu-west-2

LIVE_DISTRIBUTION          = id of cloudfront distribution for live app site

#Documents
DOCS_DISTRIBUTION          = id of cloudfront distribution for documents site

DOCS_AWS_REGION            = AWS region docs site hosted in eg eu-west-1

#Rainforest
RAINFOREST_API_TOKEN       = API token to access rainforest cli

GITHUB_TOKEN               = access token for github to check job process

#Release please
RELEASE_PLEASE_TOKEN       = allows release bot to work

The usual GITHUB_TOKEN doesn't work since PRs created using it doesn't trigger GitHub actions builds.

