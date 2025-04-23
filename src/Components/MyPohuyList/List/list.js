import './list.css';
import { useState } from 'react';
import ListButton from './Listbutton/ListButton.js';
import RenameButton from './ItemButtons/RenameButton/ButtonRename.js';
import DeleteButton from './ItemButtons/DeleteButton/DeleteButton.js';

function List() {
    const [lists, setLists] = useState([]);

    const createNewItem = (listId) => {
        const elementName = prompt('Введите имя для нового элемента списка:');
        if (elementName) {
            setLists(lists.map(list => 
                list.id === listId ? {...list,
                items: [{id: Date.now(), value: elementName}]} : list
            ));
        }
    };

    const clearPage = (listId) => {
        setLists(lists.map(list => 
            list.id === listId ? {...list, items: []} : list
        ));
    };

    const deleteItem = (listId, itemId) => {
        setLists(lists.map(list => 
            list.id === listId ? {...list,
            items: list.items.filter(item => item.id !== itemId)} : list
        ));
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

    function message() {
        alert("ПОХУЙ");
    }

    const createNewList = () => {
        setLists([...lists, {id: Date.now(), items: []}]);
    };

    return (
        <div className='list'>
            <h2>Список дел</h2>
            {lists.map(list => (
                <div key={list.id} className='list-wrapper'>
                    <input className='list-name'
                    placeholder='Введите название списка' maxLength={40}/>
                    <form>
                        {(list.items || []).map(item => (
                            <div key={item.id} className="list-item">
                                <input type='checkbox'/>
                                {item.value}
                                <RenameButton onClick={() => renameItem(list.id, item.id)}/>
                                <DeleteButton onClick={() => deleteItem(list.id, item.id)}/>
                            </div>
                        ))}
                    </form>
                    <div className='button-section'>
                        <ListButton
                            onClick={() => createNewItem(list.id)}
                            name="Добавить"
                        />
                        <ListButton 
                            onClick={() => clearPage(list.id)}
                            name="Очистить"
                        />
                        <ListButton 
                            onClick={message}
                            name="Похуй"
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