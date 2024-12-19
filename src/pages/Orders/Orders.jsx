import React from 'react'

const Orders = () => {
  return (
    <div className="container">
      <div className='orders'>
        <form className="left_page">
          <h3>Контактная информация</h3>
          <input type="text" />
          <div className="method_pay">
            <label htmlFor="">
              <input type="radio" />
              доставка
            </label>
            <label htmlFor="">
              <input type="radio" />
              подобрать
            </label>
          </div>
            <h3>Адрес доставки</h3>
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='First Name'/>
        </form>
        <div className="right_page">
          <h3>Вы заказываете</h3>
        </div>
      </div>
    </div>
  )
}

export default Orders