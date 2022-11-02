import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, '%20')

  // eslint-disable-next-line no-console
  console.log('mi mensaje formateado es', formattedMessage, logo)

  return (
    <>
      <div className="fixed bottom-2 left-2 flex br-pill bg-green pa4 ba b--white">
        <a
          className="no-underline flex"
          href={`https://wa.me/${phone}?text=${formattedMessage}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={logo} width={width} height={height} alt="whatsapp-logo" />
          <span className="white pl2 b">{message}</span>
        </a>
      </div>
    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}
WhatsappButton.defaultProps = {
  logo: 'assets/img/whatsapp-logo.png',
  phone: '30459267',
  message: 'Asesor Acer',
  width: 80,
  height: 80,
}
WhatsappButton.schema = {
  title: 'Botón de Whatsapp',
  type: 'object',
  properties: {
    logo: {
      title: 'Logo de Whatsapp que se relacione con la marca',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader', // subida de imagenes
      },
    },
    phone: {
      title: 'Teléfono',
      description: 'Agrega por favor el número de teléfono',
      type: 'string',
    },
    mesagge: {
      title: 'Mensaje',
      description: 'Agrega por favor el mensaje que se vera para tu cliente',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'Width',
      description: 'width',
      type: 'number',
    },
    height: {
      title: 'height',
      description: 'height',
      type: 'number',
    },
  },
}

export default WhatsappButton
