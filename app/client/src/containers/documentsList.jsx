import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const DocumentsList = ({ documents }) => {
  return (
    <div>
      {documents.map(document =>
        <MuiThemeProvider>
          <Card key={document.id} style={{margin: " 1% 15% 3% 15%", padding: " 0 4% 4% 4% "}}>
            <CardText>
              <h5>
                <p >Title: {document.title}</p>
              </h5>
              <p>{document.content}</p>
              <p>Author: {document.User.firstName} {document.User.lastName}</p>
              <p style={{ color: "green"}}>{document.access}</p>
            </CardText>
          </Card>
        </MuiThemeProvider>
      )}
    </div>
  );
};
DocumentsList.propTypes = {
  documents: PropTypes.object,
};
export default DocumentsList;  
