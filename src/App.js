import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import EditContact from './components/EditContact/EditContact';
import ContactContext from './Context/ContactsContext';

function App() {
  return (
    <ContactContext>
      <BrowserRouter>
        <Routes>
          <Route exact path="/add" element={<AddContact />} />
          <Route exact path="/list" element={<ContactList />} />
          <Route exact path="/edit/:id" element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </ContactContext>
  );
}

export default App;
// Мамед, Данияр, Азим - отображение
// Тахмина, Алсу - удаление контакта
// Беназир, Чинара, Айзада, Эрадил - редактирование
// Махабат, Алина - поиск
// Эльдияр, Бекболсун, Абсамат, Азим - пагинация
