import * as React from 'react';
import { Calendar } from 'antd';
class IhrCalendar extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  public render() {
    return (
      <main className="homePage">
        <Calendar />
      </main>
    )
  }
}
export default IhrCalendar;


