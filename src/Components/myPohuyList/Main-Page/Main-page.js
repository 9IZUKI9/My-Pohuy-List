import { useState } from 'react';
import './Main-page.css'

function MainPage() {
    const [items, setItems] = useState([]);

    const addNewItem = () => {
        const userValue = prompt('Введите имя для нового элемента списка:')
        if (userValue) {
            setItems([...items, { 
            value: userValue}]);
        }
    };

    const deleteItems = () => {
        setItems(items.filter(items => items !== items));
    }

    function message() {
        alert("ПОХУЙ")
    }

    return (
        <div className='main-page'>
            <h2>Список дел</h2>
            <form>
                {items.map(item => (
                    <div key={item.id} className="main-page__item">
                        <input type='checkbox'/>
                        <div className='item-value'>{item.value}</div>
                    </div>
                ))}
            </form>
            <div className='button-section'>
                <button type="button"
                onClick={addNewItem}>
                    Добавить
                </button>

                <button type='button'
                onClick={deleteItems}>
                    Очистить
                </button>

                <button type='button' 
                onClick={message}>
                    Похуй
                </button>
            </div>
        </div>
    )
}

export default MainPage;
