import React, { lazy } from 'react'

import {
  CAvatar,
  CButton,
  CProgress,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CProgressBar,
  CDropdownToggle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetProgress,
} from '@coreui/react'
import { DocsCallout, Example } from 'src/reusable'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import Charts from '../components/charts/Charts.js'
import Todayabsent from '../components/widgets/Todayabsent.js'
import CIcon from '@coreui/icons-react'
const WidgetsDropdown = lazy(() => import('../components/widgets/WidgetsDropdown.js'))
const MyWidgets = lazy(() => import('../components/widgets/MyWidgets.js'))
// const Todayabsent = lazy(() => import('../components/widgets/MyWidgets.js'))

const Dashboard = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <Charts />

        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            <CCol className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">Visits</div>
              <strong>29.703 Users (40%)</strong>
              <CProgress thin className="mt-2" precision={1} color="success" value={40} />
            </CCol>
            <CCol className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">Unique</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress thin className="mt-2" precision={1} color="info" value={40} />
            </CCol>
            <CCol className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">Pageviews</div>
              <strong>78.706 Views (60%)</strong>
              <CProgress thin className="mt-2" precision={1} color="warning" value={40} />
            </CCol>
            <CCol className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">New Users</div>
              <strong>22.123 Users (80%)</strong>
              <CProgress thin className="mt-2" precision={1} color="danger" value={40} />
            </CCol>
            <CCol className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">Bounce Rate</div>
              <strong>Average Rate (40.15%)</strong>
              <CProgress thin className="mt-2" precision={1} value={40} />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>

      <MyWidgets />

      <CRow>
        <CCol md="12">
          <CRow>
            <CCol xs="12" md="4" xl="4" className="mt-2">
              <CCard>
                <CCardBody>
                  <CRow>
                    <CCol sm="12">
                      <div>
                        <p className="mytitle">Statistics</p>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  <div className="progress-group ">
                    <div className="progress-group-header">
                      <span>Today Leave</span>
                      <span className="ms-auto font-semibold">4/10</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress thin color="warning" value={43} />
                    </div>
                  </div>
                  <div className="progress-group ">
                    <div className="progress-group-header">
                      <span>Pending</span>
                      <span className="ms-auto font-semibold">85/92</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress thin color="warning" value={37} />
                    </div>
                  </div>

                  <div className="progress-group">
                    <div className="progress-group-header">
                      <span>Completed Projects</span>
                      <span className="ms-auto font-semibold">95/110</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress thin color="success" value={56} />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <span>Open Tickets</span>
                      <span className="ms-auto font-semibold">190/210</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress thin color="success" value={15} />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <span>Closed Tasks</span>
                      <span className="ms-auto font-semibold">22/212</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress thin color="success" value={11} />
                    </div>
                  </div>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol xs="12" md="4" xl="4" className="mt-2">
              <CCard>
                <CCardBody>
                  <CRow>
                    <CCol sm="12">
                      <div>
                        <p className="mytitle">Task Statistics</p>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  <div className="mytask">
                    <CCol md={6} sm="6" className="taskvalue">
                      <CWidgetProgress className="mb-4" value="385" title="Total Tasks" />
                    </CCol>
                    <CCol md={6} sm="6" className="taskvalue">
                      <CWidgetProgress className="mb-4" value="19" title="Overdue Task" />
                    </CCol>
                  </div>

                  <CProgress className="mb-3">
                    <CProgressBar color="success" value={20}>
                      20%
                    </CProgressBar>
                    <CProgressBar color="warning" value={15}>
                      15%
                    </CProgressBar>
                    <CProgressBar color="danger" value={30}>
                      30%
                    </CProgressBar>
                    <CProgressBar color="info" value={25}>
                      25%
                    </CProgressBar>
                    <CProgressBar color="primary" value={10}>
                      10%
                    </CProgressBar>
                  </CProgress>

                  <div className="progress-group-header result">
                    <CIcon className="icon icon-lg me-2" name="cil-user" />
                    <span>Completed Tasks</span>
                    <span className="ms-auto font-semibold">166</span>
                  </div>

                  <div className="progress-group-header result">
                    <CIcon className="icon icon-lg me-2" name="cil-user" />
                    <span>Inprogress Tasks</span>
                    <span className="ms-auto font-semibold">116</span>
                  </div>

                  <div className="progress-group-header result">
                    <CIcon name="cil-user" className="icon icon-lg me-2" />
                    <span>On Hold Tasks</span>
                    <span className="ms-auto font-semibold">31</span>
                  </div>

                  <div className="progress-group-header result">
                    <CIcon name="cil-user" className="icon icon-lg me-2" />
                    <span>Pending Tasks</span>
                    <span className="ms-auto font-semibold">47</span>
                  </div>

                  <div className="progress-group-header result">
                    <CIcon name="cil-user" className="icon icon-lg me-2" />
                    <span>Review Task</span>
                    <span className="ms-auto font-semibold">5</span>
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs="12" md="4" xl="4" className="mt-2">
              <CCard>
                <CCardBody>
                  <CRow>
                    <CCol sm="12">
                      <div>
                        <p className="mytitle">Today Absent</p>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  <Todayabsent />
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>

          <br />
        </CCol>
      </CRow>
      <CRow>
        <CCol md={6} sm={12}>
          <CTable hover responsive align="middle" className="mb-0 border">
            <CTableHead color="light">
              <p className="mytitle">Invoices</p>
              <CTableRow>
                <CTableHeaderCell>Invoice ID</CTableHeaderCell>
                <CTableHeaderCell>Client</CTableHeaderCell>
                <CTableHeaderCell>Due Date</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell>Total</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>
                  <div className="myid">00001</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div>Yiorgos Avraamu</div>
                </CTableDataCell>

                <CTableDataCell>
                  <div>11 Jan 2019</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div className="partiallypaid"> Partially </div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <div>$530</div>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>
                  <div className="myid">00002</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div>Avraamu Hsddwcf</div>
                </CTableDataCell>

                <CTableDataCell>
                  <div>11 Feb 2019</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div className="paid">Paid</div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <div>$50</div>
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell>
                  <div className="myid">00003</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div>Yiorgos Fjjds</div>
                </CTableDataCell>

                <CTableDataCell>
                  <div>11 May 2019</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div className="unpaid">Unpaid</div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <div>$400</div>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>
                  <div className="myid">00004</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div>Adhbhdd Avraamu</div>
                </CTableDataCell>

                <CTableDataCell>
                  <div>19 Mar 2019</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div className="paid">Paid</div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <div>$350</div>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCol>
        <CCol md={6} sm={12}>
          <CTable hover responsive align="middle" className="mb-0 border">
            <CTableHead color="light">
              <p className="mytitle">Payments</p>
              <CTableRow>
                <CTableHeaderCell>Invoice ID</CTableHeaderCell>
                <CTableHeaderCell>Client</CTableHeaderCell>
                <CTableHeaderCell>Payment Type</CTableHeaderCell>
                <CTableHeaderCell>Due Date</CTableHeaderCell>
                <CTableHeaderCell>Total</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>
                  <div className="myid">00001</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div>Yiorgos Avraamu</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div>Paypal</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div>11 Jan 2019</div>
                </CTableDataCell>

                <CTableDataCell className="text-center">
                  <div>$530</div>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>
                  <div className="myid">00002</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div>Avraamu Hsddwcf</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div>Paypal</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div>11 Feb 2019</div>
                </CTableDataCell>

                <CTableDataCell className="text-center">
                  <div>$50</div>
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell>
                  <div className="myid">00003</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div>Yiorgos Fjjds</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div>Paypal</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div>11 May 2019</div>
                </CTableDataCell>

                <CTableDataCell className="text-center">
                  <div>$400</div>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>
                  <div className="myid">00004</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div>Adhbhdd Avraamu</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div>Paypal</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div>19 Mar 2019</div>
                </CTableDataCell>

                <CTableDataCell className="text-center">
                  <div>$350</div>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCol>
      </CRow>

      <CRow className="mytablessss">
        <CCol md={6} sm={12}>
          <CTable hover responsive align="middle" className="mb-0 border">
            <CTableHead color="light">
              <p className="mytitle">Clients</p>
              <CTableRow>
                <CTableHeaderCell className="text-center">
                  <CIcon name="cil-people" />
                </CTableHeaderCell>
                <CTableHeaderCell>User</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                <CTableHeaderCell>Usage</CTableHeaderCell>
                <CTableHeaderCell>Activity</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell className="text-center">
                  <CAvatar size="md" src="/avatars/1.jpg" status="success" />
                </CTableDataCell>
                <CTableDataCell>
                  <div>Yiorgos Avraamu</div>
                  <div className="small text-medium-emphasis">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CIcon size="xl" name="cif-us" title="us" id="us" />
                </CTableDataCell>
                <CTableDataCell>
                  <div className="clearfix">
                    <div className="float-start">
                      <strong>50%</strong>
                    </div>
                    <div className="float-end">
                      <small className="text-medium-emphasis">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <CProgress thin color="success" value={50} />
                </CTableDataCell>

                <CTableDataCell>
                  <div className="small text-medium-emphasis">Last login</div>
                  <strong>10 sec ago</strong>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell className="text-center">
                  <CAvatar size="md" src="/avatars/2.jpg" status="danger" />
                </CTableDataCell>
                <CTableDataCell>
                  <div>Avram Tarasios</div>
                  <div className="small text-medium-emphasis">
                    <span>Recurring</span> | Registered: Jan 1, 2015
                  </div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CIcon size="xl" name="cif-br" title="br" id="br" />
                </CTableDataCell>
                <CTableDataCell>
                  <div className="clearfix">
                    <div className="float-start">
                      <strong>10%</strong>
                    </div>
                    <div className="float-end">
                      <small className="text-medium-emphasis">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <CProgress thin color="info" value={10} />
                </CTableDataCell>

                <CTableDataCell>
                  <div className="small text-medium-emphasis">Last login</div>
                  <strong>5 minutes ago</strong>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell className="text-center">
                  <CAvatar size="md" src="/avatars/3.jpg" status="warning" />
                </CTableDataCell>
                <CTableDataCell>
                  <div>Quintin Ed</div>
                  <div className="small text-medium-emphasis">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CIcon size="xl" name="cif-in" title="in" id="in" />
                </CTableDataCell>
                <CTableDataCell>
                  <div className="clearfix">
                    <div className="float-start">
                      <strong>74%</strong>
                    </div>
                    <div className="float-end">
                      <small className="text-medium-emphasis">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <CProgress thin color="warning" value={74} />
                </CTableDataCell>

                <CTableDataCell>
                  <div className="small text-medium-emphasis">Last login</div>
                  <strong>1 hour ago</strong>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell className="text-center">
                  <CAvatar size="md" src="/avatars/4.jpg" status="secondary" />
                </CTableDataCell>
                <CTableDataCell>
                  <div>Enéas Kwadwo</div>
                  <div className="small text-medium-emphasis">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CIcon size="xl" name="cif-fr" title="fr" id="fr" />
                </CTableDataCell>
                <CTableDataCell>
                  <div className="clearfix">
                    <div className="float-start">
                      <strong>98%</strong>
                    </div>
                    <div className="float-end">
                      <small className="text-medium-emphasis">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <CProgress thin color="danger" value={98} />
                </CTableDataCell>

                <CTableDataCell>
                  <div className="small text-medium-emphasis">Last login</div>
                  <strong>Last month</strong>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell className="text-center">
                  <CAvatar size="md" src="/avatars/5.jpg" status="success" />
                </CTableDataCell>
                <CTableDataCell>
                  <div>Agapetus Tadeáš</div>
                  <div className="small text-medium-emphasis">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CIcon size="xl" name="cif-es" title="es" id="es" />
                </CTableDataCell>
                <CTableDataCell>
                  <div className="clearfix">
                    <div className="float-start">
                      <strong>22%</strong>
                    </div>
                    <div className="float-end">
                      <small className="text-medium-emphasis">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <CProgress thin color="info" value={22} />
                </CTableDataCell>

                <CTableDataCell>
                  <div className="small text-medium-emphasis">Last login</div>
                  <strong>Last week</strong>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell className="text-center">
                  <CAvatar size="md" src="/avatars/6.jpg" status="danger" />
                </CTableDataCell>
                <CTableDataCell>
                  <div>Friderik Dávid</div>
                  <div className="small text-medium-emphasis">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CIcon size="xl" name="cif-pl" title="pl" id="pl" />
                </CTableDataCell>
                <CTableDataCell>
                  <div className="clearfix">
                    <div className="float-start">
                      <strong>43%</strong>
                    </div>
                    <div className="float-end">
                      <small className="text-medium-emphasis">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <CProgress thin color="success" value={43} />
                </CTableDataCell>

                <CTableDataCell>
                  <div className="small text-medium-emphasis">Last login</div>
                  <strong>Yesterday</strong>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCol>
        <CCol md={6} sm={12}>
          <CTable hover responsive align="middle" className="mb-0 border">
            <CTableHead color="light">
              <p className="mytitle">Recent Projects</p>
              <CTableRow>
                <CTableHeaderCell>User</CTableHeaderCell>

                <CTableHeaderCell>Progress</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>
                  <div>Yiorgos Avraamu</div>
                  <div className="small text-medium-emphasis">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </CTableDataCell>

                <CTableDataCell>
                  <CProgress thin color="success" value={50} />
                </CTableDataCell>

                <CTableDataCell className="text-center">
                  <CIcon name="cil-options" className="text-high-emphasis-inverse" />
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>
                  <div>Avram Tarasios</div>
                  <div className="small text-medium-emphasis">
                    <span>Recurring</span> | Registered: Jan 1, 2015
                  </div>
                </CTableDataCell>

                <CTableDataCell>
                  <CProgress thin color="info" value={10} />
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CIcon name="cil-options" className="text-high-emphasis-inverse" />
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>
                  <div>Quintin Ed</div>
                  <div className="small text-medium-emphasis">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </CTableDataCell>

                <CTableDataCell>
                  <CProgress thin color="warning" value={74} />
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CIcon name="cil-options" className="text-high-emphasis-inverse" />
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>
                  <div>Enéas Kwadwo</div>
                  <div className="small text-medium-emphasis">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </CTableDataCell>

                <CTableDataCell>
                  <CProgress thin color="danger" value={98} />
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CIcon name="cil-options" className="text-high-emphasis-inverse" />
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>
                  <div>Avram Tarasios</div>
                  <div className="small text-medium-emphasis">
                    <span>Recurring</span> | Registered: Jan 1, 2015
                  </div>
                </CTableDataCell>

                <CTableDataCell>
                  <CProgress thin color="info" value={10} />
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CIcon name="cil-options" className="text-high-emphasis-inverse" />
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell>
                  <div>Agapetus Tadeáš</div>
                  <div className="small text-medium-emphasis">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </CTableDataCell>

                <CTableDataCell>
                  <CProgress thin color="info" value={22} />
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CIcon name="cil-options" className="text-high-emphasis-inverse" />
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>
                  <div>Friderik Dávid</div>
                  <div className="small text-medium-emphasis">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </CTableDataCell>

                <CTableDataCell>
                  <CProgress thin color="success" value={43} />
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CIcon name="cil-options" className="text-high-emphasis-inverse" />
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
