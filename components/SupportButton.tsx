import React, { useState, useEffect } from 'react';
import Hub from '../public/assets/images/Hub.svg';
import Chat from '../public/assets/images/Chat.svg';
import Help from '../public/assets/images/Ayuda.svg';
import Phone from '../public/assets/images/Telefono.svg';

const SupportButton = () => {
  const Support = {
    start: false,
    initializer: function () {
      this.actions();
    },
    validate: function () {
      if (this.start) {
        this.close();
      } else {
        this.open();
      }
    },
    open: function () {
      const supportList = document.getElementById('support-list');
      const alternate = document.getElementById('alternate-support-list');
      if (this.start) return;
      supportList.classList.add('activo');
      //alternate.innerHTML = `<i data-toggle="tooltip" data-placement="left" title="Cerrar" class="fal fa-times"></i>`;
      this.start = true;
    },
    close: function () {
      const supportList = document.getElementById('support-list');
      const alternate = document.getElementById('alternate-support-list');
      if (!this.start) return;
      supportList.classList.remove('activo');
      // alternate.innerHTML =
      //  '<i data-toggle="tooltip" data-placement="left" title="Ayuda" class="fal fa-user-headset"></i>';
      this.start = false;
    },
    actions: function () {
      const supportList = document.getElementById('support-list');
      const alternate = document.getElementById('alternate-support-list');
      const t = this;
      alternate.addEventListener('click', function () {
        t.validate();
      });
    },
  };

  useEffect(() => {
    Support.initializer();
  });

  return (
    <nav className='support-button'>
      <ul id='support-list'>
        <li className='is-share' id='alternate-support-list'>
          <img src={Hub} />
        </li>
        <li>
          <a
            className='is-pqrs tooltip'
            data-toggle='tooltip'
            data-placement='left'
            title='PQRSF'
            target='_blank'
          >
            <img src={Chat} />
            <div className='tooltip-left'>
              <p>Contactanos por whatsapp:</p>
              <p className='a_purple'>+52 1 55 7499 1178</p>
              <i></i>
            </div>
          </a>
        </li>
        <li>
          <a
            className='is-support tooltip'
            data-toggle='tooltip'
            data-placement='left'
            title='Soporte'
            target='_blank'
          >
            <img src={Help} />
            <div className='tooltip-left'>
              <p>Contactanos por chat:</p>
              <p className='a_purple'>Abrir chat</p>
              <i></i>
            </div>
          </a>
        </li>
        <li>
          <a
            className='is-contact tooltip'
            data-toggle='tooltip'
            data-placement='left'
            title='Contacto'
            target='_blank'
          >
            <img src={Phone} />
            <div className='tooltip-left'>
              <p>Contactanos por llamada:</p>
              <p className='a_purple'>+52 1 55 7499 1178</p>
              <i></i>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default SupportButton;
