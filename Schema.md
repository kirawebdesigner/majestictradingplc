# Schema

No database is required for this static homepage concept.

## Future Content Model

### Services
- `id`: string
- `title`: string
- `description`: string
- `capabilities`: string[]
- `image`: string

### Projects
- `id`: string
- `title`: string
- `category`: string
- `description`: string
- `image`: string
- `placeholder`: boolean

### Inquiries
- `id`: string
- `name`: string
- `email`: string
- `phone`: string
- `service`: string
- `message`: string
- `createdAt`: datetime

## Relationships
- One inquiry may reference one primary service.
- Projects may reference many services in a later CMS.
