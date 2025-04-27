import './list.css';
import { useState } from 'react';
import ListButton from './Listbutton/ListButton.js';
import RenameButton from './ItemButtons/RenameButton/ButtonRename.js';
import DeleteButton from './ItemButtons/DeleteButton/DeleteButton.js';

function List() {
    const [lists, setLists] = useState([]);

    const createNewList = () => {
        setLists([...lists, {id: Date.now(), items: []}]);
    };

    const deleteList = (listId) => {
        setLists(list => list.filter(list => list.id !== listId))
    }

    const createNewItem = (listId) => {
        const userValue = prompt('Введите имя для нового элемента списка:');
        if (userValue) {
            setLists(lists.map(list => 
                list.id === listId ? {...list,
                items: [{id: Date.now(), value: userValue}]} : list
            ));
        }
    };

    const renameItem = (listId, itemId) => {
        const userValue = prompt('Введите новое имя для элемента:');
        if (userValue) {
            setLists(lists.map(list => 
                list.id === listId ? {...list, items: list.items.map(item =>
                item.id === itemId ? {...item, value: userValue} : item)} : list
            ));
        }
    };

    const deleteItem = (listId, itemId) => {
        setLists(lists.map(list => 
            list.id === listId ? {...list,
            items: list.items.filter(item => item.id !== itemId)} : list
        ));
    };

    const clearPage = (listId) => {
        setLists(lists.map(list => 
            list.id === listId ? {...list, items: []} : list
        ));
    };

    function message() {
        alert("ПОХУЙ");
    }

    return (
        <div className='list'>
            <h2>Список дел</h2>
            {lists.map(list => (
                <div key={list.id} className='list-wrapper'>
                    <input className='list-name'
                    placeholder='Введите название списка' maxLength={33}/>
                    <DeleteButton 
                        onClick={() => deleteList(list.id)}
                        title='Удалить список'
                    />
                    <form>
                        {(list.items || []).map(item => (
                            <div key={item.id} className="list-item">
                                <input type='checkbox'/>
                                {item.value}
                                <RenameButton 
                                    onClick={() => renameItem(list.id, item.id)}
                                    title='Переименовать элемент'
                                />
                                <DeleteButton 
                                    onClick={() => deleteItem(list.id, item.id)}
                                    title='Удалить элемент'
                                />
                            </div>
                        ))}
                    </form>
                    <div className='button-section'>
                        <ListButton
                            onClick={() => createNewItem(list.id)}
                            name="Добавить"
                            title='Добавить элемент'
                        />
                        <ListButton 
                            onClick={() => clearPage(list.id)}
                            name="Очистить"
                            title='Очистить список'
                        />
                        <ListButton 
                            onClick={message}
                            name="Похуй"
                            title='Похуй'
                        />
                    </div>
                </div>
            ))}

            <ListButton 
                onClick={createNewList} 
                name="Добавить список" 
            />
        </div>
    );
}

export default List;