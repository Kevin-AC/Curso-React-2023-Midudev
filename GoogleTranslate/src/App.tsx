import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelec'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'
function App () {
  const { loading, fromLanguage, toLanguage, fromText, result, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResoult } = useStore()
  return (
    <Container>
      <h1>GoogleTranslate</h1>
      <Row>
        <Col>
        <Stack gap={2}>
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
             onChange={setFromLanguage}/>
             <TextArea
              loading={loading}
              placeholder={SectionType.From}
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
             />
          </Stack>
        </Col>
        <Col>
          <Button
            variant='link'
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}>
              <ArrowsIcon/>
          </Button>
        </Col>
        <Col>
        <Stack>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage} />
            <TextArea
              loading={loading}
              placeholder={SectionType.To}
              type={SectionType.To}
              value={result}
              onChange={setResoult}
            />
        </Stack>
        </Col>
      </Row>
    </Container>

  )
}

export default App
