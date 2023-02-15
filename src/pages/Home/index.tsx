import { Play } from 'phosphor-react'
import {
  ButtonCountdownContainer,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInputContainer,
  SeparatorContainer,
  TaskInputContainer
} from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Work in</label>
          <TaskInputContainer
            type="text"
            id="task"
            placeholder="add the project..."
          />

          <label htmlFor="minutesAmount">during</label>
          <MinutesAmountInputContainer
            type="number"
            id="minutesAmount"
            placeholder="00"
          />

          <span>minutes</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <SeparatorContainer>:</SeparatorContainer>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <ButtonCountdownContainer disabled={false} type="submit">
          <Play size={24} />
          Start
        </ButtonCountdownContainer>
      </form>
    </HomeContainer>
  )
}
