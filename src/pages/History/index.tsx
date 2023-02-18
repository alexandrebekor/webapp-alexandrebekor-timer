import {
  HistoryContainer,
  HistoryListContainer,
  StatusContainer
} from './styles'

export const History = () => {
  return (
    <HistoryContainer>
      <h2>Meu Histórico</h2>

      <HistoryListContainer>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa 01</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 semanas</td>
              <td>
                <StatusContainer statusColor="green">
                  Em Andamento
                </StatusContainer>
              </td>
            </tr>
            <tr>
              <td>Tarefa 01</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 semanas</td>
              <td>
                <StatusContainer statusColor="red">
                  Em Andamento
                </StatusContainer>
              </td>
            </tr>
            <tr>
              <td>Tarefa 01</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 semanas</td>
              <td>
                <StatusContainer statusColor="yellow">
                  Em Andamento
                </StatusContainer>
              </td>
            </tr>
            <tr>
              <td>Tarefa 01</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 semanas</td>
              <td>
                <StatusContainer statusColor="yellow">
                  Em Andamento
                </StatusContainer>
              </td>
            </tr>
            <tr>
              <td>Tarefa 01</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 semanas</td>
              <td>
                <StatusContainer statusColor="yellow">
                  Em Andamento
                </StatusContainer>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryListContainer>
    </HistoryContainer>
  )
}
