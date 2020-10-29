import styled from "styled-components";
import Colors from "../../styles/Colors";

interface Props {
    columns: any;
}

export const Container = styled.div`
    width: 100%;    
`;

export const Table = styled.table<Props>`
    width: 100%;
    overflow-x: auto;

    th {
        background: #fff;
        color: ${props => Colors.primary};
    }

    td, th {
        padding: .6rem;
        border: 1px solid #ccc;
    }

    td {
        font-size: 1.4rem;
        color: ${props => Colors.primaryText};
    }
    
    @media (max-width: 760px), 
    (min-device-width: 768px) and (max-device-width: 1024px)  {        
	    table, thead, tbody, th, td, tr { 
		    display: block; 
	    }
        
        thead tr { 
            position: absolute;
            top: -9999px;
            left: -9999px;
        }
	    	
    	tr {  border: 1px solid #ccc; }
	
        td { 
            border: none;
            border-bottom: 1px solid #eee; 
            position: relative;
            padding-left: 50%; 
        }
	
        td:before { 
            position: absolute;
            top: 6px;
            left: 6px;
            width: 45%; 
            padding-right: 10px; 
            white-space: nowrap;
        }	

        ${props => {
            return props.columns.map((col: any, index: number) => (
                `td:nth-of-type(${index + 1}):before { content: "${col.title}"}`
            ))            
        }}

    }
`;

export const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BtnTable = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.color};

    padding: .5rem .5rem;
    margin: 0 .5rem 0 .5rem;
    outline: none;
    border-radius: 0.8rem;
    border-color: transparent;
    box-shadow: .3rem .3rem .3rem #cccccc;

    &:hover {
        cursor: pointer;
        opacity: 0.6;

        transform: translate(2px, 1px);
    }

`;