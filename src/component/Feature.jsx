import React from 'react';
import FeactureBox from './FeatureBox';
import featureimage1 from '../assets/img/feac1.svg';
import featureimage2 from '../assets/img/feac2.svg'
import featureimage3 from '../assets/img/feac3.svg'
import featureimage4 from '../assets/img/feac4.svg'




function Feature() {
  return (
    <div id="feactures">
        <div className="a-container text-white p-2">
            <FeactureBox classname='text-white p-20' image={featureimage1} title='Diseño Web' text='Creamos sitios web personalizados.Ofrecemos un diseño atractivo y una interfaz adecuada para tu sitio ,cualquier dispositivo podra acceder.'/>
            <FeactureBox image={featureimage2} title='Hoting' text='Contamos con servicio de diseño gráfico, para que nuestros clientes puedan desarrollar su negocio, logrando identidades potentes a la hora de mejorar sus ventas.'/>
            <FeactureBox image={featureimage3}title='Consultoría web' text='Trabajamos codo a codo con nuestros clientes para lograr la mejor estrategia de comunicación acorde a las necesidades del negocio.' />
            <FeactureBox image={featureimage4} title='Marketing' text='Desarrollamos campañas exitosas para tu producto o marca. Tu anuncio aparecerá en las primeras posiciones de Google cuando tus potenciales clientes te estén buscando.'/>

        </div>
    </div>
  )
}

export default Feature;