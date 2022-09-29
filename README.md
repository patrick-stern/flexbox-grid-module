# @strn_dev/flexbox-grid-module
![npm](https://img.shields.io/npm/v/@strn_dev/flexbox-grid-module)

## Installation
-------

NPM
```javascript
npm install @strn_dev/flexbox-grid-module
```
Yarn
```javascript
yarn add @strn_dev/flexbox-grid-module
```

## Usage
-------

```javascript
import { Container, Col, Row } from '@strn_dev/flexbox-grid-module';
import '@strn_dev/flexbox-grid-module/dist/index.css';
```

```javascript
<Container>
    <Row>
        <Col sm={12} md={6} lg={4}>
            ...
        </Col>
    </Row>
</Container>
```

## API
-------

### Container
| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| className | string | - | additonal CSS class |

### Row
| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| alignItems | string | - | `flex-start`, `center`, `flex-end` |
| justifyContent | string | - | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` |
| className | string | - | additonal CSS class |

### Col
| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| sm | number | - | column width - <768px |
| md | number | - | column width - >=768px |
| lg | number | - | column width - >=992px |
| className | string | - | additonal CSS class |

## License
-------
MIT

