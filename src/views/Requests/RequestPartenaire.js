import {
      CBadge, CButton, CCollapse, CDataTable, CCardBody, CModal, CModalBody, CModalFooter,
      CCol, CRow, CForm, CFormGroup, CLabel, CInput, CFormText, CImg,
      CModalHeader,
      CTabs,
      CNav,
      CNavItem,
      CNavLink,
      CTabContent,
      CTabPane,
} from '@coreui/react'
import { CChart } from '@coreui/react-chartjs';
import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import './Partenaire.css'

export default function RequestPartenaire() {
      const doughnut = {
            labels: [
                  'Red',
                  'Green',
                  'Yellow',
            ],
            datasets: [
                  {
                        data: [300, 50, 100],
                        backgroundColor: [
                              '#FF6384',
                              '#36A2EB',
                              '#FFCE56',
                        ],
                        hoverBackgroundColor: [
                              '#FF6384',
                              '#36A2EB',
                              '#FFCE56',
                        ],
                  }],
      };
      const [photoIndex, setphotoIndex] = useState(0);
      const [isOpen, setIsOpen] = useState(false);
      const images = [
            " https://www.coover.fr/wp-content/uploads/2020/06/lettre-renouvellement-cdd.png"
      ];
      useEffect(() => {
            var data = JSON.stringify({ "companyName": "Carrefour", "contactName": "Carrefour Market", "taxIdNumber": "TAX10000002365", "rib": "AIB10000002563" });

            var config = {
                  method: 'post',
                  url: 'http://192.168.1.21:8080/login',

                  "form-data": {
                        username: 'HoucemSaidani',
                        password: '123456'
                  }
            }

            axios(config)
                  .then(function (response) {
                        console.log(JSON.stringify(response.data));
                  })
                  .catch(function (error) {
                        console.log(error);
                  });
      }, [])

      const usersData = [
            { id: 0, nom: 'John Doe', enregistr??: '2018/01/01', role: 'Guest', boutique: 'boutique XXX' },
            { id: 1, nom: 'Samppa Nori', enregistr??: '2018/01/01', role: 'Member', boutique: 'boutique XXX' },
            { id: 2, nom: 'Estavan Lykos', enregistr??: '2018/02/01', role: 'Staff', boutique: 'boutique XXX' },
            { id: 3, nom: 'Chetan Mohamed', enregistr??: '2018/02/01', role: 'Admin', boutique: 'boutique XXX' },
            { id: 4, nom: 'Derick Maximinus', enregistr??: '2018/03/01', role: 'Member', boutique: 'boutique XXX' },
            { id: 5, nom: 'Friderik D??vid', enregistr??: '2018/01/21', role: 'Staff', boutique: 'boutique XXX' },
            { id: 6, nom: 'Yiorgos Avraamu', enregistr??: '2018/01/01', role: 'Member', boutique: 'boutique XXX' },
            { id: 7, nom: 'Avram Tarasios', enregistr??: '2018/02/01', role: 'Staff', boutique: 'boutique XXX' },
            { id: 8, nom: 'Quintin Ed', enregistr??: '2018/02/01', role: 'Admin', boutique: 'boutique XXX' },
            { id: 9, nom: 'En??as Kwadwo', enregistr??: '2018/03/01', role: 'Member', boutique: 'boutique XXX' },
            { id: 10, nom: 'Agapetus Tade????', enregistr??: '2018/01/21', role: 'Staff', boutique: 'boutique XXX' },
            { id: 11, nom: 'Carwyn Fachtna', enregistr??: '2018/01/01', role: 'Member', boutique: 'boutique XXX' },
            { id: 12, nom: 'Nehemiah Tatius', enregistr??: '2018/02/01', role: 'Staff', boutique: 'boutique XXX' },
            { id: 13, nom: 'Ebbe Gemariah', enregistr??: '2018/02/01', role: 'Admin', boutique: 'boutique XXX' },
            { id: 14, nom: 'Eustorgios Amulius', enregistr??: '2018/03/01', role: 'Member', boutique: 'boutique XXX' },
            { id: 15, nom: 'Leopold G??sp??r', enregistr??: '2018/01/21', role: 'Staff', boutique: 'boutique XXX' },
            { id: 16, nom: 'Pompeius Ren??', enregistr??: '2018/01/01', role: 'Member', boutique: 'boutique XXX' },
            { id: 17, nom: 'Pa??jo Jadon', enregistr??: '2018/02/01', role: 'Staff', boutique: '0' },
            { id: 18, nom: 'Micheal Mercurius', enregistr??: '2018/02/01', role: 'Admin', boutique: 'boutique XXX' },
            { id: 19, nom: 'Ganesha Dubhghall', enregistr??: '2018/03/01', role: 'Member', boutique: 'boutique XXX' },
            { id: 20, nom: 'Hiroto ??imun', enregistr??: '2018/01/21', role: 'Staff', boutique: 'boutique XXX' },
            { id: 21, nom: 'Vishnu Serghei', enregistr??: '2018/01/01', role: 'Member', boutique: 'boutique XXX' },
            { id: 22, nom: 'Zbyn??k Phoibos', enregistr??: '2018/02/01', role: 'Staff', boutique: 'boutique XXX' },
            { id: 23, nom: 'Aulus Agmundr', enregistr??: '2018/01/01', role: 'Member', boutique: 'boutique XXX' },
            { id: 42, nom: 'Ford Prefect', enregistr??: '2001/05/25', role: 'Alien', boutique: 'boutique XXX' }
      ]
      const [modal, setModal] = useState(false);
      const [modal2, setModal2] = useState(false);
      const [details, setDetails] = useState([])
      // const [items, setItems] = useState(usersData)

      const toggleDetails = (index) => {
            const position = details.indexOf(index)
            let newDetails = details.slice()
            if (position !== -1) {
                  newDetails.splice(position, 1)
            } else {
                  newDetails = [...details, index]
            }
            setDetails(newDetails)
      }


      const fields = [
            { key: 'nom', _style: { width: '40%' } },
            'enregistr??',

            { key: 'boutique', _style: { width: '20%' } },
            {
                  key: 'show_details',
                  label: '',
                  _style: { width: '1%' },
                  sorter: false,
                  filter: false
            },

      ]



      return (
            <div>



                  <CDataTable
                        items={usersData}
                        fields={fields}
                        columnFilter
                        tableFilter
                        footer
                        itemsPerPageSelect
                        itemsPerPage={5}
                        hover
                        sorter
                        pagination

                        scopedSlots={{
                              'boutique':
                                    (item) => (
                                          <td>

                                                {item.boutique}

                                          </td>
                                    ),
                              'show_details':
                                    (item, index) => {
                                          return (
                                                <tr>
                                                      <td classnom="py-2"
                                                            style={{
                                                                  flexDirection: 'row'
                                                            }}>
                                                            <CButton
                                                                  color="primary"
                                                                  variant="outline"
                                                                  shape="square"
                                                                  size="sm"
                                                                  onClick={() => { toggleDetails(index) }}
                                                            >
                                                                  Traiter
                                                </CButton>

                                                      </td>
                                                      <td>
                                                            <CButton
                                                                  color="danger"
                                                                  variant="outline"
                                                                  shape="square"
                                                                  size="sm"
                                                                  onClick={
                                                                        () => setModal2(!modal2)
                                                                  }
                                                            >
                                                                  Supprimer
                                                </CButton>
                                                      </td>
                                                </tr>
                                          )
                                    },
                              'details':
                                    (item, index) => {
                                          return (
                                                <CCollapse show={details.includes(index)} style={{
                                                      backgroundColor: "white",
                                                      justifyContent: "center",
                                                      alignItems: "center"
                                                }}>
                                                      <CCardBody
                                                            style={{
                                                                  display: "flex",
                                                                  flexDirection: "column"

                                                            }}
                                                      >
                                                            <CImg
                                                                  src="https://assets.puzzlefactory.pl/puzzle/222/145/original.jpg"
                                                                  className="c-avatar-img"

                                                                  style={{
                                                                        width: 100,

                                                                        height: 100,
                                                                        alignSelf: "center",
                                                                        objectFit: "contain"

                                                                  }}

                                                            />
                                                            <div
                                                                  style={{
                                                                        display: "flex",
                                                                        flexDirection: "row",
                                                                        justifyContent: "center",
                                                                        textAlign: "center",


                                                                  }}
                                                            >
                                                                  <p class="h3">XXXX XXXXX</p>

                                                            </div>
                                                            <CTabs activeTab="home">
                                                                  <CNav variant="tabs"
                                                                        style={{

                                                                              alignSelf: "center",
                                                                              marginTop: 25

                                                                        }}>
                                                                        <CNavItem>
                                                                              <CNavLink data-tab="home">
                                                                                    Informations g??n??rales
          </CNavLink>
                                                                        </CNavItem>
                                                                        <CNavItem>
                                                                              <CNavLink data-tab="boutique">
                                                                                    Boutique
          </CNavLink>
                                                                        </CNavItem>
                                                                        <CNavItem>
                                                                              <CNavLink data-tab="profile">
                                                                                    Documents
          </CNavLink>
                                                                        </CNavItem>
                                                                        <CNavItem>
                                                                              <CNavLink data-tab="messages">
                                                                                    Validation
                                                                              </CNavLink>
                                                                        </CNavItem>
                                                                  </CNav>
                                                                  <CTabContent>
                                                                        <CTabPane data-tab="home"
                                                                              style={{
                                                                                    marginTop: 30
                                                                              }}
                                                                        >


                                                                              <div style={{
                                                                                    display: "flex",
                                                                                    flexDirection: "row",
                                                                                    justifyContent: "space-evenly"

                                                                              }}>
                                                                                    <div
                                                                                          style={{
                                                                                                width: 115
                                                                                          }}
                                                                                    >
                                                                                          <p class="h6">Nom</p>
                                                                                    </div>
                                                                                    <div

                                                                                    >
                                                                                          <p class="h6">Carla</p>
                                                                                    </div>
                                                                              </div>
                                                                              <div style={{
                                                                                    display: "flex",
                                                                                    flexDirection: "row",
                                                                                    justifyContent: "space-evenly"

                                                                              }}>
                                                                                    <div
                                                                                          style={{
                                                                                                width: 115
                                                                                          }}
                                                                                    >
                                                                                          <p class="h6">Pr??nom</p>
                                                                                    </div>
                                                                                    <div

                                                                                    >
                                                                                          <p class="h6">XXXX</p>
                                                                                    </div>
                                                                              </div>
                                                                              <div style={{
                                                                                    display: "flex",
                                                                                    flexDirection: "row",
                                                                                    justifyContent: "space-evenly",



                                                                              }}>
                                                                                    <div
                                                                                          style={{
                                                                                                width: 115
                                                                                          }}
                                                                                    >
                                                                                          <p class="h6">Date de naissance</p>
                                                                                    </div>
                                                                                    <div

                                                                                    >
                                                                                          <p class="h6">XXXX</p>
                                                                                    </div>
                                                                              </div>
                                                                              <div style={{
                                                                                    display: "flex",
                                                                                    flexDirection: "row",
                                                                                    justifyContent: "space-evenly"

                                                                              }}>
                                                                                    <div
                                                                                          style={{
                                                                                                width: 115
                                                                                          }}
                                                                                    >
                                                                                          <p class="h6">T??l??phone</p>
                                                                                    </div>
                                                                                    <div

                                                                                    >
                                                                                          <p class="h6">XXXX</p>
                                                                                    </div>
                                                                              </div>
                                                                        </CTabPane>
                                                                        <CTabPane data-tab="profile" style={{
                                                                              marginTop: 30
                                                                        }}>
                                                                              <div style={{
                                                                                    display: "flex",
                                                                                    flexDirection: "row",
                                                                                    justifyContent: "space-evenly"

                                                                              }}>
                                                                                    <div
                                                                                          style={{
                                                                                                width: 115
                                                                                          }}
                                                                                    >
                                                                                          <p class="h6">Copie CIN</p>
                                                                                    </div>
                                                                                    <div>
                                                                                          <p
                                                                                                onClick={() => setIsOpen(true)} className="linkImage">454444.jpg</p>
                                                                                    </div>

                                                                              </div>
                                                                              <div style={{
                                                                                    display: "flex",
                                                                                    flexDirection: "row",
                                                                                    justifyContent: "space-evenly"

                                                                              }}>
                                                                                    <div
                                                                                          style={{
                                                                                                width: 115
                                                                                          }}
                                                                                    >
                                                                                          <p class="h6">Copie Contract</p>
                                                                                    </div>
                                                                                    <div

                                                                                    >
                                                                                          <p className="linkImage" >454444.jpg</p>
                                                                                    </div>
                                                                              </div>
                                                                              <div style={{
                                                                                    display: "flex",
                                                                                    flexDirection: "row",
                                                                                    justifyContent: "space-evenly"

                                                                              }}>
                                                                                    <div
                                                                                          style={{
                                                                                                width: 115
                                                                                          }}
                                                                                    >
                                                                                          <p class="h6">Copie matricule fiscale</p>
                                                                                    </div>
                                                                                    <div

                                                                                    >
                                                                                          <p className="linkImage" >454444.jpg</p>
                                                                                    </div>
                                                                              </div>
                                                                        </CTabPane>
                                                                        <CTabPane data-tab="messages" style={{
                                                                              marginTop: 30
                                                                        }}>
                                                                              <CRow

                                                                              >
                                                                                    <CCol sm="6">
                                                                                          <div
                                                                                                style={{
                                                                                                      borderWidth: 5,
                                                                                                      borderColo: "black",
                                                                                                      textAlign: "center"
                                                                                                }}
                                                                                          >
                                                                                                <p
                                                                                                      class="h6">Copie CIN</p>
                                                                                          </div>
                                                                                    </CCol>
                                                                                    <CCol sm="6"
                                                                                          style={{

                                                                                                textAlign: "center"
                                                                                          }}
                                                                                    >
                                                                                          <label class="c-switch c-switch-pill c-switch-success">
                                                                                                <input type="checkbox" class="c-switch-input" />
                                                                                                <span class="c-switch-slider"></span>
                                                                                          </label>
                                                                                    </CCol>
                                                                              </CRow>
                                                                              <CRow

                                                                              >
                                                                                    <CCol sm="6">
                                                                                          <div
                                                                                                style={{
                                                                                                      borderWidth: 5,
                                                                                                      borderColo: "black",
                                                                                                      textAlign: "center"
                                                                                                }}
                                                                                          >
                                                                                                <p
                                                                                                      class="h6">Copie Matricule Fiscale</p>
                                                                                          </div>
                                                                                    </CCol>
                                                                                    <CCol sm="6"
                                                                                          style={{

                                                                                                textAlign: "center"
                                                                                          }}
                                                                                    >
                                                                                          <label class="c-switch c-switch-pill c-switch-success">
                                                                                                <input type="checkbox" class="c-switch-input" />
                                                                                                <span class="c-switch-slider"></span>
                                                                                          </label>
                                                                                    </CCol>
                                                                              </CRow>
                                                                              <CRow

                                                                              >
                                                                                    <CCol sm="6">
                                                                                          <div
                                                                                                style={{
                                                                                                      borderWidth: 5,
                                                                                                      borderColo: "black",
                                                                                                      textAlign: "center"
                                                                                                }}
                                                                                          >
                                                                                                <p
                                                                                                      class="h6">Copie Contract</p>
                                                                                          </div>
                                                                                    </CCol>
                                                                                    <CCol sm="6"
                                                                                          style={{

                                                                                                textAlign: "center"
                                                                                          }}
                                                                                    >
                                                                                          <label class="c-switch c-switch-pill c-switch-success">
                                                                                                <input type="checkbox" class="c-switch-input" />
                                                                                                <span class="c-switch-slider"></span>
                                                                                          </label>
                                                                                    </CCol>
                                                                              </CRow>
                                                                              <CRow

                                                                              >
                                                                                    <CCol
                                                                                          style={{
                                                                                                justifyContent: 'flex-end',
                                                                                                textAlign: "end",

                                                                                          }}
                                                                                    >
                                                                                          <CButton color="success">Accepter </CButton>
                                                                                          <CButton color="danger">R??clamer </CButton>

                                                                                    </CCol>

                                                                              </CRow>
                                                                        </CTabPane>
                                                                        <CTabPane data-tab="boutique" style={{
                                                                              marginTop: 30
                                                                        }}>
                                                                              <div style={{
                                                                                    display: "flex",
                                                                                    flexDirection: "row",
                                                                                    justifyContent: "space-evenly"

                                                                              }}>
                                                                                    <div
                                                                                          style={{
                                                                                                width: 115
                                                                                          }}
                                                                                    >
                                                                                          <p class="h6">Nom du boutique</p>
                                                                                    </div>
                                                                                    <div

                                                                                    >
                                                                                          <p class="h6">XXXXX</p>
                                                                                    </div>
                                                                              </div>
                                                                              <div style={{
                                                                                    display: "flex",
                                                                                    flexDirection: "row",
                                                                                    justifyContent: "space-evenly"

                                                                              }}>
                                                                                    <div
                                                                                          style={{
                                                                                                width: 115
                                                                                          }}
                                                                                    >
                                                                                          <p class="h6">Adresse</p>
                                                                                    </div>
                                                                                    <div

                                                                                    >
                                                                                          <p class="h6">XXXX</p>
                                                                                    </div>
                                                                              </div>
                                                                              <div style={{
                                                                                    display: "flex",
                                                                                    flexDirection: "row",
                                                                                    justifyContent: "space-evenly",



                                                                              }}>
                                                                                    <div
                                                                                          style={{
                                                                                                width: 115
                                                                                          }}
                                                                                    >
                                                                                          <p class="h6">Cat??gorie des produits</p>
                                                                                    </div>
                                                                                    <div

                                                                                    >
                                                                                          <p class="h6">XXXX</p>
                                                                                    </div>
                                                                              </div>

                                                                        </CTabPane>
                                                                  </CTabContent>
                                                            </CTabs>
                                                      </CCardBody>
                                                </CCollapse>
                                          )
                                    }
                        }}
                  />
                  <CModal
                        show={modal}
                        onClose={() => {
                              setModal(!modal);
                        }}
                        color="primary"
                  >
                        <CModalHeader closeButton>Ajouter un Partenaire</CModalHeader>
                        <CModalBody>
                              <CRow>
                                    <CCol md="6">


                                          <CFormGroup >
                                                <CLabel htmlFor="nf-name">Nom</CLabel>
                                                <CInput
                                                      type="text"
                                                      id="nf-name"
                                                      name="nf-name"
                                                      placeholder="Nom"
                                                      autoComplete="nom"
                                                />


                                          </CFormGroup>
                                    </CCol>
                                    <CCol sm="6">
                                          <CFormGroup sm="6">
                                                <CLabel htmlFor="nf-email">Pr??nom</CLabel>
                                                <CInput
                                                      type="text"
                                                      id="nf-lastname"
                                                      name="nf-lastname"
                                                      placeholder="Pr??nom"
                                                      autoComplete="lastname"
                                                />

                                          </CFormGroup>
                                    </CCol>



                              </CRow>
                              <CRow>
                                    <CCol sm="12">
                                          <CFormGroup sm="12">
                                                <CLabel htmlFor="nf-email">Email</CLabel>
                                                <CInput
                                                      type="email"
                                                      id="nf-email"
                                                      name="nf-email"
                                                      placeholder="Email"
                                                      autoComplete="email"
                                                />

                                          </CFormGroup>
                                    </CCol>
                                    <CCol sm="12">
                                          <CFormGroup>
                                                <CLabel htmlFor="nf-password">Mot de passe</CLabel>
                                                <CInput
                                                      type="password"
                                                      id="nf-password"
                                                      name="nf-password"
                                                      placeholder="Mot de passe"
                                                      autoComplete="current-password"
                                                />

                                          </CFormGroup>
                                    </CCol>
                              </CRow>

                        </CModalBody>
                        <CModalFooter>
                              <CButton color="primary">Ajouter</CButton>{' '}
                              <CButton
                                    color="secondary"
                                    onClick={
                                          () => {
                                                setModal(!modal);
                                          }}
                              >Cancel</CButton>
                        </CModalFooter>
                  </CModal >
                  <CModal
                        show={modal2}
                        onClose={() => setModal2(!modal2)}
                        color="danger"
                  >
                        <CModalHeader closeButton>Modal title</CModalHeader>
                        <CModalBody>
                              Vous ??tes s??r de supprimer ce Partenaire ?
        </CModalBody>
                        <CModalFooter>
                              <CButton color="danger">Supprimer</CButton>{' '}
                              <CButton
                                    color="secondary"
                                    onClick={() => setModal2(!modal2)}
                              >Cancel</CButton>
                        </CModalFooter>
                  </CModal>
            </div >

      )
}
