import React, { useRef, useState } from 'react';
import './Appointments.css';
import DatePicker from 'sassy-datepicker';
import emailjs from '@emailjs/browser';

const Appointments = () => {
  const [date, setDate] = useState('');
  const [correct, setCorrect] = useState([false, false]);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const nameErrRef = useRef(null);
  const phoneErrRef = useRef(null);
  const handleDateChange = (date) => {
    setDate(date.toString().split(' ').slice(0, 4).join(' '));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      const today = new Date();
      const currDate =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();

      const template = {
        name: nameRef.current.value,
        date: date,
        phone: phoneRef.current.value,
        current_date: currDate,
        location: `https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},16z`,
      };
      console.log(template);
      emailjs
        .send(
          'service_61a55ok',
          'template_h4enxzf',
          template,
          'aSW4gahJ_9z0-ePY5'
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response);
          },
          (error) => {
            alert('FAILED...', error);
          }
        );
    });
  };
  const phoneChange = () => {
    if (
      isNaN(phoneRef.current.value) ||
      phoneRef.current.value.toString().length === 0
    ) {
      setCorrect([correct[0], false]);
      phoneErrRef.current.classList.remove('hidden');
      phoneRef.current.classList.add('err');
    } else {
      setCorrect([correct[0], true]);
      phoneErrRef.current.classList.add('hidden');
      phoneRef.current.classList.remove('err');
    }
  };
  const nameChange = () => {
    if (
      nameRef.current.value.length > 30 ||
      nameRef.current.value.length === 0
    ) {
      setCorrect([false, correct[1]]);
      nameErrRef.current.classList.remove('hidden');
      nameRef.current.classList.add('err');
    } else {
      setCorrect([true, correct[1]]);
      nameErrRef.current.classList.add('hidden');
      nameRef.current.classList.remove('err');
    }
  };
  return (
    <div className='appointments' id='appointments'>
      <div className='appointments__calender'>
        <h1>Select Your Appointment Date</h1>
        <form className='appointments__form'>
          <div className='formAbove'>
            <div className='datePicker'>
              <DatePicker onChange={handleDateChange} />
            </div>
            <div className='inputs'>
              <input
                type='text'
                placeholder='Your Name'
                required
                ref={nameRef}
                onChange={nameChange}
              />
              <div ref={nameErrRef} className={`nameErr hidden`}>
                Invalid Name
              </div>
              <input
                type='text'
                placeholder='Phone Number'
                required
                ref={phoneRef}
                onChange={phoneChange}
              />
              <div ref={phoneErrRef} className='phoneErr hidden'>
                Phone Number Invalid
              </div>
              <div className='appointments__chosenDate'>{date}</div>
            </div>
          </div>

          <button
            type='submit'
            onClick={handleSubmit}
            className='appointments__setAppoint'
            disabled={correct.reduce((a, b) => a + b) === 2 ? '' : true}
          >
            Set Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointments;
