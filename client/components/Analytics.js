import React from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchClients } from '../store/clients';

class Clients extends React.Component {
  constructor() {
    super();
    this.state = {
      labels: ['Low', 'Mid', 'High'],
      datasets: [],
    };
  }
  async componentDidMount() {
    try {
      await this.props.getClients();
      let { clients } = this.props;
      let low = 0;
      let mid = 0;
      let high = 0;
      for (let i = 0; i < clients.length; i++) {
        if (clients[i].readiness < 30) low++;
        else if (clients[i].readiness < 45) mid++;
        else {
          high++;
        }
      }
      let chart = {
        label: 'Mortgage Readiness Scores',
        backgroundColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [],
      };
      chart.data = [low, mid, high];
      this.setState({ datasets: [chart] });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state);
    const { clients } = this.props;
    return (
      <>
        <div>
          <Bar
            data={this.state}
            options={{
              title: { display: true, text: 'Readiness Scores', fontSize: 20 },
              legend: { display: true, position: 'right' },
            }}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  clients: state.clients,
});

const mapDispatchToProps = (dispatch) => ({
  getClients: () => dispatch(fetchClients()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
