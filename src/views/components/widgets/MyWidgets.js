import React from 'react'
import {
  CCardGroup,
  CCol,
  CLink,
  CRow,
  CWidgetIcon,
  CWidgetProgress,
  CWidgetProgressIcon,
  CWidgetSimple,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'

import WidgetsBrand from './WidgetsBrand'
import WidgetsDropdown from './WidgetsDropdown'

const MyWidgets = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetProgress
            className="mb-4"
            value="89.9%"
            title="Widget title"
            progressColor="success"
            progressValue={89.9}
            text="Lorem ipsum dolor sit amet enim."
          />
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetProgress
            className="mb-4"
            value="12.124"
            title="Widget title"
            progressColor="info"
            progressValue={89.9}
            text="Lorem ipsum dolor sit amet enim."
          />
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetProgress
            className="mb-4"
            value="$98.111,00"
            title="Widget title"
            progressColor="warning"
            progressValue={89.9}
            text="Lorem ipsum dolor sit amet enim."
          />
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetProgress
            className="mb-4"
            value="2 TB"
            title="Widget title"
            progressValue={89.9}
            text="Lorem ipsum dolor sit amet enim."
          />
        </CCol>
      </CRow>
    </>
  )
}

export default MyWidgets
