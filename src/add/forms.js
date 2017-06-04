import React, { Component } from 'react';
import { Button, Row, Input, Icon} from 'react-materialize';

class TrainingDayForm extends Component {
  render () {
    return(
      <div className='container'>
        <Row>
          <Input s={12} label='Дата тренировки' name='on' type='date' onChange={function(e, value) {}}/>
          <Input s={3} type='select' label="Самочувствие" defaultValue='5'>
            <option value='5'>5</option>
            <option value='4'>4</option>
            <option value='3'>3</option>
            <option value='2'>2</option>
            <option value='1'>1</option>
          </Input>
          <Input s={3} type='select' label="Сон" defaultValue='5'>
            <option value='5'>5</option>
            <option value='4'>4</option>
            <option value='3'>3</option>
            <option value='2'>2</option>
            <option value='1'>1</option>
          </Input>
          <Input s={3} type='select' label="Аппетит" defaultValue='5'>
            <option value='5'>5</option>
            <option value='4'>4</option>
            <option value='3'>3</option>
            <option value='2'>2</option>
            <option value='1'>1</option>
          </Input>
          <Input s={3} type='select' label="Настроение" defaultValue='5'>
            <option value='5'>5</option>
            <option value='4'>4</option>
            <option value='3'>3</option>
            <option value='2'>2</option>
            <option value='1'>1</option>
          </Input>
          <Input s={12} label='Погода'></Input>
          <Input s={12} label='Комментарий'></Input>
          <Button waves='light'>Добавить</Button>
        </Row>
      </div>
    )
  }
}

export {TrainingDayForm};
