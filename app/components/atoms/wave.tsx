import * as React from "react";

type Props = {
  color: string;
  classes?: string;
};

export default class Wave extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className={this.props.classes} height="100%" width="100%"> 
        <path
          fill={this.props.color ? this.props.color : "#333"}
          fillOpacity="1"
          style={{ width: "100%" }}
          d="M0,192L26.7,170.7C53.3,149,107,107,160,80C213.3,53,267,43,320,80C373.3,117,427,203,480,218.7C533.3,235,587,181,640,149.3C693.3,117,747,107,800,122.7C853.3,139,907,181,960,197.3C1013.3,213,1067,203,1120,186.7C1173.3,171,1227,149,1280,117.3C1333.3,85,1387,43,1413,21.3L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
    );
  }
}
